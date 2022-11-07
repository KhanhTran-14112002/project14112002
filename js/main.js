let user = [
    {
      chucvu: "giangvien",
      username: "khanh1",
      password: "123"
    },
    {
      chucvu: "giaovu",
      username: "khanh2",
      password: "123"
    },
    {
      chucvu: "sinhvien",
      username: "khanh3",
      password: "123"
    }
  ]
  function hanldeLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    user.forEach((user) => {
      if (user.username == username && user.password == password) {
        alert("Đăng nhập thành công!");
        switch (user.chucvu) {
          case "giangvien":
            window.location.href = "./giangvien.html"
            break;
  
          case "giaovu":
            window.location.href = "./giaovu.html"
            break;
  
          case "sinhvien":
            window.location.href = "./sinhvien.html"
            break;
        }
      }
    });
}