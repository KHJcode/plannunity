import type {NextApiRequest, NextApiResponse} from "next"
import nextConnect from "next-connect"
import multer from 'multer'


const upload = multer({
    storage: multer.diskStorage({
        destination: `${__dirname}/public/uploads`,
        filename(req, file, callback) {
          callback(null, file.originalname);
        },
    })
})

const apiRoute = nextConnect({
    onNoMatch(req: NextApiRequest, res: NextApiResponse) {
        res.status(405).json({
            error: `Method ${req.method} Not Allowed`
        })
    }
})

const uploadMiddleeware = upload.array('images');

apiRoute.use(uploadMiddleeware)

apiRoute.post((req, res) => {
    res.status(200).json({data: "success"})
})

export default apiRoute

export const config = {
    api: {
        bodyParser: false
    }
}