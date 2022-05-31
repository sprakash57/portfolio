import { NextApiRequest, NextApiResponse } from "next";

const projects = async (_: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(`${process.env.METADATA_BASE_URL}/projects.json`);
    const data = await response.json();
    console.log(data)
    return res.status(200).json({ projects: data });
}

export default projects;