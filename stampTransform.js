/*
* @Author: Fancyandcat
* @Date:   2018-05-30 17:30:32
* @Last Modified by:   Fancyandcat
* @Last Modified time: 2018-05-30 17:57:31
*/

'use strict';
export function stampToDate(data) {
	data = data * 1000
	let d = new Date(data)
	let year = d.getFullYear()
	let month = d.getMonth() + 1
	month = month < 10 ? '0' + month : month
	let day = d.getDate()
	day = day < 10 ? '0' + day : day
  return `${year}-${month}-${day}`
}

export function stampToTime(data) {
	data = data * 1000
  let d = new Date(data)
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = d.getDate()
  day = day < 10 ? '0' + day : day
  let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
  let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
  let second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
