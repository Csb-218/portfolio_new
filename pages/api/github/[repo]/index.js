import { githubApi } from "../../../../config/github_config";

export default async function handler(req, res) {
  const { repo } = req.query;

  try {
    const response = await githubApi.get(`/repos/${process.env.GITHUB_USERNAME}/${repo}`);
    res.status(200).json({
      name: response.data.name,
      description: response.data.description,
      stars: response.data.stargazers_count,
      forks: response.data.forks_count,
      issues: response.data.open_issues_count
    });
  } catch (error) {
    error.response?.status === 404
      ? res.status(404).json({ error: 'Repo not found' })
      : res.status(500).json({ error: 'Failed to fetch repo' });
  }
}