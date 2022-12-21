const hours = +prompt('напишіть скільки годин')

if (!isNaN(hours)&& hours>0){
    const result = hours * 3600;
    alert(`${result} секунд`)
}else {
    alert('Треба ввести число яке буде більше 0')
}
