import Mock from 'mockjs'
Mock.mock("/login",'post',()=>{
    return{
        'result':{
            user:[
                {
                    id:1,
                    name:"臭臭",
                    sex:1,
                    password:1314
                }
            ]
        }
    }
})