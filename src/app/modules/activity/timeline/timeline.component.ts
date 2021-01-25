import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

    /**
   * timelineChats
   */
  timeline = [

    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/thor.jpeg',
      name: 'Thor',
      group : false,
      group_name : null,
      id : 1,
      last_msg: 'call me',
      last_active: '08/01',
      post_time : new Date(),
      message : 'update plz?'

    },
    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/ironman.jpeg',
      name: 'Ironman',
      group : false,
      group_name : null,
      id : 2,
      last_msg: 'get ready! bringing party to you',
      last_active: '08/01',
      post_time : new Date(),
      message : `"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`
    },
    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/profile1.jpeg',
      name: 'Loffy Dagger',
      group : false,
      group_name : null,
      id : 3,
      last_msg: 'what is party?',
      last_active: '08/01',
      post_time : new Date(),
      message : `Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics`

    },
    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/thor.jpeg',
      name: 'Thor',
      group : false,
      group_name : null,
      id : 1,
      msg: 'call me',
      last_active: '08/01',
      post_time : new Date(),
      message : 'Do it do it ?'

    },
    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/ironman.jpeg',
      name: 'Ironman',
      group : false,
      group_name : null,
      id : 2,
      last_msg: 'get ready! bringing party to you',
      last_active: '08/01',
      post_time : new Date(),
      message : `"all this mistaken idea of denouncing pleasure and praising pain `
    },
    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/thor.jpeg',
      name: 'Thor',
      group : false,
      group_name : null,
      id : 1,
      last_msg: 'call me',
      last_active: '08/01',
      post_time : new Date(),
      message : 'update plz?'

    },
    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/ironman.jpeg',
      name: 'Ironman',
      group : false,
      group_name : null,
      id : 2,
      last_msg: 'get ready! bringing party to you',
      last_active: '08/01',
      post_time : new Date(),
      message : `"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`
    },
    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/thor.jpeg',
      name: 'Thor',
      group : false,
      group_name : null,
      id : 1,
      last_msg: 'call me',
      last_active: '08/01',
      post_time : new Date(),
      message : 'I dont care !!'

    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
