import axios from "axios";
import { categorizeJobs, normalizeJobs } from "../utils/cleanJobs";

const apiKey = import.meta.env.VITE_JSEARCH_API_KEY;

export async function getJobsData() {
  try {
    const response = await axios.get("https://jsearch.p.rapidapi.com/search-v2", {
      params: {
        query: "frontend developer OR backend developer OR full stack developer OR ui ux designer OR software engineer",
        num_pages: "2",
        date_posted: "all",
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    });

    const rawJobs = response.data.data.jobs || [];
    const jobs = normalizeJobs(rawJobs);
    console.log(jobs)
    const groupedJobs = categorizeJobs(jobs);

    return { jobs, groupedJobs };
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return { jobs: [], groupedJobs: categorizeJobs([]) };
  }
}