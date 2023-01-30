// let index={
//     init:function (){
//         $("#btn-save").on("click",()=>{
//             this.save();
//         });
//         // $("#btn-login").on("click",()=>{
//         //     this.login();
//         // });
//     },
//
//     save:function(){
//         // alert('user의 save함수 호출됨');
//         let data ={
//             username: $("#username").val(),
//             password: $("#password").val(),
//             email: $("#email").val()
//         };
//         // console.log(data);
//
//         //ajax호출시 default가 비동기 호출
//         //ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청!
//         //ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환한다.
//         $.ajax({
//             //회원가입 수행을 요청(100초라고 가정)
//             type: "POST",
//             url:"/auth/joinProc",
//             data: JSON.stringify(data), //http body 데이터
//             contentType:"application/json; charset=utf-8", //body데이터가 어떤 타입인지(MIME)
//             dataType:"json" //요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열이다.(생긴게 json이라 => javascript 오브젝트로 변경)
//         }).done(function (resp){
//             //응답의 결과가 정상인 경우
//             alert("회원가입이 완료되었습니다.");
//             console.log(resp);
//             location.href="/";
//         }).fail(function (error){
//             //응답의 결과가 실패인 경우
//             alert(JSON.stringify(error));
//
//         }); //ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청한다.
//     },
//
//     //전통 방식의 로그인
//     // login:function(){
//     //     // alert('user의 save함수 호출됨');
//     //     let data ={
//     //         username: $("#username").val(),
//     //         password: $("#password").val()
//     //     };
//     //
//     //     $.ajax({
//     //         type: "POST",
//     //         url:"/api/user/login",
//     //         data: JSON.stringify(data), //http body 데이터
//     //         contentType:"application/json; charset=utf-8", //body데이터가 어떤 타입인지(MIME)
//     //         dataType:"json" //요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열이다.(생긴게 json이라 => javascript 오브젝트로 변경)
//     //     }).done(function (resp){
//     //         //응답의 결과가 정상인 경우
//     //         alert("로그인이 완료되었습니다.");
//     //         location.href="/";
//     //     }).fail(function (error){
//     //         //응답의 결과가 실패인 경우
//     //         alert(JSON.stringify(error));
//     //
//     //     }); //ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청한다.
//     // }
//
//
//
//
// }
//
// index.init();
//


let index = {
    init: function(){
        $("#btn-save").on("click", ()=>{ // function(){} , ()=>{} this를 바인딩하기 위해서!!
            this.save();
        });
        $("#btn-delete").on("click", ()=>{ // function(){} , ()=>{} this를 바인딩하기 위해서!!
            this.deleteById();
        });
        $("#btn-update").on("click", ()=>{ // function(){} , ()=>{} this를 바인딩하기 위해서!!
            this.update();
        });
    },

    save: function(){
        //alert('user의 save함수 호출됨');
        let data = {
            title: $("#title").val(),
            content: $("#content").val(),
        };

        $.ajax({
            type: "POST",
            url: "/api/board",
            data: JSON.stringify(data), // http body데이터
            contentType: "application/json; charset=utf-8",// body데이터가 어떤 타입인지(MIME)
            dataType: "json" // 요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열 (생긴게 json이라면) => javascript오브젝트로 변경
        }).done(function(resp){
            alert("글쓰기가 완료되었습니다.");
            //console.log(resp);
            location.href = "/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });

    },

    deleteById: function(){
        let id =$("#id").text();

        $.ajax({
            type: "DELETE",
            url: "/api/board/"+id,
            dataType:"json"
        }).done(function(resp){
            alert("삭제가 완료되었습니다.");
            location.href = "/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });

    },

    update: function(){

        let id= $("#id").val();

        let data = {
            title: $("#title").val(),
            content: $("#content").val(),
        };

        $.ajax({
            type: "PUT",
            url: "/api/board/"+id,
            data: JSON.stringify(data), // http body데이터
            contentType: "application/json; charset=utf-8",// body데이터가 어떤 타입인지(MIME)
            dataType: "json" // 요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열 (생긴게 json이라면) => javascript오브젝트로 변경
        }).done(function(resp){
            alert("글수정이 완료되었습니다.");
            //console.log(resp);
            location.href = "/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });

    },
}

index.init();