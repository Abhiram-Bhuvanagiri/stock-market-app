'use server';

import { getAuth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";
import { headers } from "next/headers";

export const signUpWithEmail = async ({ email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData) => {
    try {
        const auth = await getAuth();
        const response = await auth.api.signUpEmail({
            body: { email, password, name: fullName },
            headers: await headers()
        });

        if (response) {
            try {
                await inngest.send({
                    name: 'app/user.created',
                    data: { email, name: fullName, country, investmentGoals, riskTolerance, preferredIndustry }
                });
            } catch (inngestErr) {
                // Inngest is optional - don't block signup if it fails
                console.warn('Inngest event failed (non-critical):', inngestErr);
            }
        }

        return { success: true, data: response };
    } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : 'Sign up failed';
        console.error('Sign up failed', e);
        return { success: false, error: msg };
    }
};

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
    try {
        const auth = await getAuth();
        const response = await auth.api.signInEmail({
            body: { email, password },
            headers: await headers()
        });

        return { success: true, data: response };
    } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : 'Sign in failed';
        console.error('Sign in failed', e);
        return { success: false, error: msg };
    }
};

export const signOut = async () => {
    try {
        const auth = await getAuth();
        await auth.api.signOut({ headers: await headers() });
        return { success: true };
    } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : 'Sign out failed';
        console.error('Sign out failed', e);
        return { success: false, error: msg };
    }
};
