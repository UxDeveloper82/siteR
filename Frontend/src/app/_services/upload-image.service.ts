import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
postFile(caption: string, fileUpload: File) {
  const endpoint = 'http://icreatesites4u.com/api/blogs';
  const formData: FormData = new FormData();
  formData.append('Image', fileUpload, fileUpload.name);
  formData.append('ImageCaption', caption);
  return this.http.post(endpoint, formData);
}

}
