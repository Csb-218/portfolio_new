import { githubApi } from "../../../config/github_config";

export default async function handler(req, res) {
  try {
    const [user, repos] = await Promise.all([
      githubApi.get(`/users/${process.env.GITHUB_USERNAME}`),
      githubApi.get(`/users/${process.env.GITHUB_USERNAME}/repos?per_page=100`)
    ]);

    res.status(200).json({
      followers: user.data.followers,
      following: user.data.following,
      repos: repos.data.map(repo => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count
      }))
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}