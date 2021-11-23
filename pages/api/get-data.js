import axios from "axios"

export default async(req , res)=>{
    const resp = await axios.get('https://nextjs-vercel-deployment-using-jest.vercel.app/api/hello-world');
    console.log(resp.data);
    res.json(resp.data);
}