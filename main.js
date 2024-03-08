const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const nameInput = $("#name");
const clickButton = $(".btn");
const loiChuc = $(".congratulate");
console.log(clickButton);
clickButton.addEventListener("click", showCongrate);
function showCongrate() {
  if (!(nameInput.value === "")) {
    var arrChuc = [
      `Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , ngày càng xinh đẹp , gặp nhiều may mắn và thành công trong việc`,
      `Chúc ${nameInput.value} một ngày 8/3 thật ý nghĩa, vui tư­ơi ngập tràn hạnh phúc. Chúc ${nameInput.value} luôn cười tư­ơi, cư­ời duyên, cư­ời e thẹn, cư­ời trẻ trung, ngập tràn các kiểu cười trong ngày hôm nay.`,
      `Chúc  ${nameInput.value} và các chị em trong toàn cơ quan có ngày vui trọn vẹn. Chúc ${nameInput.value} tìm cho mình được sự bình yên, hạnh phúc và có một ngày 8/3 tràn ngập niềm vui và món quà.`,
      `Chúc ${nameInput.value} ngày quốc tế Phụ nữ 8-3 mãi luôn xinh đẹp, công việc thuận lợi, Chúc ${nameInput.value} một ngày 8-3 thật nhiều quà, nhiều hoa`,
      `Chúc ${nameInput.value} có một ngày 8/3 ngập tràn niềm vui, ý nghĩa , Chúc ${nameInput.value} có ngày 8/3 và 364 ngày còn lại trong năm luôn bình an, vui vẻ và thành công trong công việc lẫn trong cuộc sống`,
      `Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , ngày càng xinh đẹp , gặp nhiều may mắn và thành công trong việc`,
      `Chúc mừng Ngày Quốc tế Phụ nữ!, Chúc ${nameInput.value} có một ngày 8/3 vui vẻ , xinh đẹp, vui tươi, gặp nhiều may mắn và nhận được nhiều món quà đặc biệt`,
      `Chúc ${nameInput.value} có một ngày 8/3 thật hạnh phúc, Chúc ${nameInput.value} mãi luôn duyên dáng, xinh đẹp và luôn có những phút giây hạnh phúc bên những người thân yêu`,
      `Chúc ${nameInput.value} và các chị em trong toàn cơ quan có ngày 8-3 luôn tươi đẹp như hoa. Chúc ${nameInput.value} mãi luôn xinh đẹp, an vui, tràn ngập hạnh phúc, mọi điều bình an và sẽ luôn thành công trong công việc .`,
    ];
    var random = arrChuc[Math.floor(Math.random() * arrChuc.length)];
    console.log(random);
    loiChuc.style.display = "block";
    loiChuc.innerHTML = `
    <h1 class="head">${random}</h1>
    <h4 class="f-heading">Happy Woman's Day</h4>
     `;
    nameInput.value = "";
  }
}
