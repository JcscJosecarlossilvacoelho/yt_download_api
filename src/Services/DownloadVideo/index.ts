import { Service } from "typedi";
import * as  fs from "fs";
import ytdl from 'ytdl-core'
import { pathDownload } from "../../utils/pathDownload";
@Service()
export class DownloadVideo {
  async  downloadVideo(url:string){
    var rx = /v=\w+/g;
    var regexReturn = rx.exec(url);
    const generatefileName = new Date().getTime() + '.mp4'
    const id = regexReturn ? regexReturn[0].toString().replace('v=','') : '0'
    await ytdl.getInfo(id).then(info => {
      ytdl(url,{
        quality:'highest'
      })
     .pipe(fs.createWriteStream(`${pathDownload}/${generatefileName}`));
    })
    return generatefileName
  }
}