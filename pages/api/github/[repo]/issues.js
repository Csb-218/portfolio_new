import { githubApi } from "../../../../config/github_config";

export default async function handler(req, res) {

    const { repo } = req.query;

    if (req.method === 'POST') {
        try {
            const response = await githubApi.post(
                `/repos/${process.env.GITHUB_USERNAME}/${repo}/issues`,
                { ...req.body }
            );
            console.log(response);
            res.status(200).json({
                issue_url : response.data.url
            });
        } catch (error) {
            console.log(error);
            error.response?.status === 404
                ? res.status(404).json({ error: 'Repo not found' })
                : res.status(500).json({ error: 'Failed to fetch repo' });
        }
    }
    else if (req.method === 'GET') {
        try {
            const response = await githubApi.get(`/repos/${process.env.GITHUB_USERNAME}/${repo}/issues`);
            res.status(200).json(response.data);
        } catch (error) {
            error.response?.status === 404
                ? res.status(404).json({ error: 'Repo not found' })
                : res.status(500).json({ error: 'Failed to fetch repo' });
        }
    }
    else {
        res.status(405).json({ error: 'Method not allowed' });
    }

}