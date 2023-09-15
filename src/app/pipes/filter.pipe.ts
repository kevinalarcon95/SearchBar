import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // if(arg === '' || arg.length < 3) return value;

    const resultPost = [];
    for(const post of value){
      if(post.title.toLowerCase().indexOf(arg.toLowerCase()) > -1
      || post.gender.toLowerCase().indexOf(arg.toLowerCase()) > -1
      || post.actor.toLowerCase().indexOf(arg.toLowerCase()) > -1
      || post.date.indexOf(arg) > -1
      ){
        resultPost.push(post);
      };
    };
    return resultPost;
  }

}
