import {request} from "./request.js"

export function gethome(){
  return request({
    url:'/home/multidata'
    })
}
export function gethomegoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
    
  })
}
