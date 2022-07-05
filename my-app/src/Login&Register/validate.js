export default function validate({ id, password}) {
    const errors = {};

    if(!id) {
        errors.id = "아이디를 입력하세요.";
    } else if(!/^[a-z]+[a-z0-9]{5,19}$/g.test(id)) {
        errors.id = "입력된 아이디가 유효하지 않습니다."
    }

    if (!password) {
        errors.password = "비밀번호가 입력되지 않았습니다.";
      } else if (8 <= password.length <= 20) {
        errors.password = "8자 이상 20자 이하의 패스워드를 사용해야 합니다.";
      }
        
    return errors;
}