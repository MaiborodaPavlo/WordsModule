import "babel-polyfill"

const adaptation = (str) => str.trim().replace(/\s+/g, " ");

export function wordsCount(str){

    const result = adaptation(str).match(/[а-яА-Я]+|\w+/g);

    if (!result) return result;

    return result.length

}

export function* getWords(str){

    const regexp = /[а-яА-Я]+|\w+/g;
    let result;

    while (result = regexp.exec(adaptation(str))) {
        yield result[0];
    }
}
