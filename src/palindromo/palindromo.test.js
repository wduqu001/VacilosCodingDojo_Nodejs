import isPalindromo from "./palindromo";

var testes = ['aia','aibofobia','ala','ama','anã','anilina','ata','arara','asa','ele','esse','mamam','matam','metem','mirim','oco','omissíssimo','osso','ovo','radar','raiar','ralar','rapar','rasar','reger','reler','reter','rever','reviver','rir','sacas','saias','salas','socos','sopapos','sós','001','not a palindrome','palindrome','wrong'];

test('shoud call palindromo', () => {
    expect(isPalindromo()).toBe(true);
});