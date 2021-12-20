function showNotif(){
  let timeInterval;
  const noSpt = document.getElementById('no-spt');
  if(noSpt.value.length < 22 ){
    alert("input no surat");
  }else{
    Swal.fire({
    title : 'Mencari Data',
    html : 'Silahkan Tunggu <b></b> detik',
    timer : 2000,
    timerProgressBar : true,
    didOpen : () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timeInterval = setInterval(()=>{
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose : () => {
      clearInterval(timeInterval)
    }
  }).then((result)=> {
    // if(result.dismiss === Swal.DismissReason.timer){
    //   console.log('I was closed by the timer')


    //   Swal.fire({
    //     title:  noSpt.value + ' Terdaftar',
    //     text :'Atas Nama Pemilik :Fery Irawan',
    //     icon : 'success',

    //     }).then(()=> {
    //         location.reload();
    //     });

    // }
    console.log(result)
    if(noSpt.value == '593.21/001/SPT/PEM/2021'){
      Swal.fire({
        title:  noSpt.value + ' Terdaftar',
        text :'Atas Nama Pemilik :Fery Irawan',
        icon : 'success',

        }).then(()=> {
            location.reload();
        });
      }else{
        Swal.fire({
        title:  noSpt.value + ' Tidak Terdaftar',
        text :'Mohon cek kembali Nomor SPT yang anda masukan',
        icon : 'warning',

        }).then(()=> {
            location.reload();
        });
      }
    
  })
  }
}

function showCaptcha(){
    const x = document.getElementById("no-spt");
    const btn = document.getElementById("btn-search");
    x.value = x.value.toUpperCase();
    if(x.value.length < 22 ){
      x.classList.add("is-invalid");
      btn.classList.add("hidden");
      btn.classList.remove("show");
    }else {
      x.classList.remove("is-invalid");
      x.classList.add("is-valid");
       btn.classList.remove("hidden");
       btn.classList.add("show");
    }
    console.log(x.value.length);
}