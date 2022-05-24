import { Inject, Service } from "typedi";
import { DownloadVideo } from "../../Services/DownloadVideo";

@Service()
export class DownloadVideoController{
    @Inject()
    downloadVideo: DownloadVideo;
    async Get(youtubeUrl:string){
       const fileurl = await  this.downloadVideo.downloadVideo(youtubeUrl)
       console.log("OI")
       console.log(fileurl)
       return fileurl
    }
}