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
        <p><strong>작성일자:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>수정일자:</strong> ${new Date().toLocaleDateString()}</p>
        <input type="password" placeholder="비밀번호를 입력하세요">
        <button class="delete-btn">삭제</button>
        <button class="edit-btn">수정</button>
    `;

    // 삭제 버튼 이벤트 리스너 추가
    const deleteBtn = entry.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        const passwordField = entry.querySelector("input[type='password']");
        const inputPassword = passwordField.value;
        // 여기서 비밀번호 확인 로직을 구현하고, 맞다면 entry를 삭제합니다.
        if (inputPassword === password) {
            entry.remove();
            alert("삭제되었습니다.");
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    });

    // 수정 버튼 이벤트 리스너 추가
    const editBtn = entry.querySelector(".edit-btn");
    editBtn.addEventListener("click", function() {
        const passwordField = entry.querySelector("input[type='password']");
        const inputPassword = passwordField.value;
        // 여기서 비밀번호 확인 로직을 구현하고, 맞다면 수정 가능한 상태로 전환합니다.
        if (inputPassword === password) {
            alert("수정 가능한 상태로 전환합니다.");
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    });

    // 방명록에 추가
    listContainer.appendChild(entry);

    // 입력 필드 비우기
    authorInput.value = "";
    passwordInput.value = "";
    titleInput.value = "";
    contentInput.value = "";
});
