import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: `mongodb+srv://ajay3008:ajay3008@blog-website.ndfvfgj.mongodb.net/, blog-website.ndfvfgj.mongodb.net/,ac-kyupzqj-shard-00-00.ndfvfgj.mongodb.net:27017,ac-kyupzqj-shard-00-01.ndfvfgj.mongodb.net:27017,ac-kyupzqj-shard-00-02.ndfvfgj.mongodb.net:27017/?replicaSet=atlas-icmkls-shard-0&ssl=true&authSource=admin`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
