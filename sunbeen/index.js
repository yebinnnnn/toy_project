const writeBtn = document.getElementById("write-btn");
const listContainer = document.getElementById("list");

writeBtn.addEventListener("click", function() {
    const authorInput = document.querySelector("#user-container input[type='text'][placeholder='작성자']");
    const passwordInput = document.querySelector("#user-container input[type='text'][placeholder='비밀번호']");
    const titleInput = document.querySelector("#write-container input[type='text'][placeholder='제목']");
    const contentInput = document.querySelector("#write-container input[type='text'][placeholder='내용을 입력하세요']");

    // 작성자, 비밀번호, 제목, 내용 값 가져오기
    const author = authorInput.value;
    const password = passwordInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (!author || !password || !title || !content) {
        alert("모든 항목을 작성해주세요!");
        return; // 함수 종료
    }

    // 방명록 항목 생성
    const entry = document.createElement("div");
    entry.id = 'entry';
    entry.classList.add("entry");
    entry.innerHTML = `
        <p><strong>작성자:</strong> ${author}</p>
        <p><strong>제목:</strong> ${title}</p>
        <p><strong>내용:</strong> ${content}</p>
        <p>작성일자</p>
        <p>수정일자</p>
    `;

    // 방명록에 추가
    listContainer.appendChild(entry);

    // 입력 필드 비우기
    authorInput.value = "";
    passwordInput.value = "";
    titleInput.value = "";
    contentInput.value = "";
});
