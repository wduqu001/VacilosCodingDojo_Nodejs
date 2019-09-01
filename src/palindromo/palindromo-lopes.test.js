
test('Verify if a word is palindrome', () => {
    expect(isPalindromo('ana')).toBe('TRUE');
});

test('Verify if a word is not palindrome', () => {
    expect(isPalindromo('any')).toBe('FALSE');
});

test('Verify if a word with different letters case is palindrome', () => {
    expect(isPalindromo('SubInOOniBus')).toBe('TRUE');
});

test('Verify if a number is palindrome', () => {
    expect(isPalindromo('171')).toBe('TRUE');
});

test('Verify if a word with punctuation marks is palindrome', () => {
    expect(isPalindromo('omissíssimo')).toBe('TRUE');
});

const isPalindromo = (text) => {

    var inverseText = '';

    for (let index = text.length -1; index >= 0; index--) {
        inverseText += text[index];
    }

    if(text.toLowerCase() == inverseText.toLowerCase()) {
        return 'TRUE';
    } else {
        return 'FALSE';
    }
}
