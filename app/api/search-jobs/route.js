
import { NextResponse } from "next/server";
const apiKey = process.env.X_RAPID_API_KEY


export async function GET(request) {
    try {
        const url = new URL(request.url)
        const searchParams = new URLSearchParams(url.search)

        const response = await fetch("https://fresh-linkedin-profile-data.p.rapidapi.com/search-jobs", {
            method: "POST",
            headers: {
                'x-rapidapi-host': 'fresh-linkedin-profile-data.p.rapidapi.com',
                'Content-Type': 'application/json',
                "x-rapidapi-key": apiKey

            },
            body: JSON.stringify({
                keywords: 'software engineer',
                geo_code: 92000000,
                date_posted: 'Any time',
                experience_levels: [],
                company_ids: [1035],
                title_ids: [],
                onsite_remotes: [],
                functions: [],
                industries: [],
                job_types: [],
                sort_by: 'Most relevant',
                easy_apply: 'false',
                under_10_applicants: 'false',
                start: 0
            }),
        });

        if (!response.ok) {
            console.error(`HTTP error! status:`, response.status + " " + response.statusText);
            return NextResponse.json({ status: false, message: 'Oops Unable to fetch the latest information' }, { status: 500, })
        } else {
            const newsResponse = await response.json();

            return NextResponse.json({ status: true, data: newsResponse.data })
        }

    } catch (e) {
        console.error(e)
        return NextResponse.json({ status: false, message: 'Something went wrong. Please try again later' }, { status: 500, })
    }
}