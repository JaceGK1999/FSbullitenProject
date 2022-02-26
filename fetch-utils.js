const SUPABASE_URL = 'https://uhmsxsfarryniihsuyry.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVobXN4c2ZhcnJ5bmlpaHN1eXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ4NTg5OTUsImV4cCI6MTk2MDQzNDk5NX0.DX8Yp3q-uUt4Q185uQlz61drW20MespMboRangENHIg';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const resp = await client.auth.signUp({ email, password });

    return resp.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function checkAuth() {
    const user = getUser();
    if (!user) {
        location.replace('/');
    }
}

export async function redirectIfLoggedIn() {
    const user = getUser();
    if (user) {
        location.replace('/home');
    }
}

export async function logout() {
    await client.auth.signOut();
    location.replace('/');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getPosts() {
    const resp = await client.from('post_its').select('*');
    return checkError(resp);
}

export async function createPost(post) {
    const resp = await client.from('post_its').insert(post);
    return checkError(resp);
}
