"use strict";

exports.numberToKorean = function (inputNumber) {
    if (typeof inputNumber !== "number" || isNaN(inputNumber)) {
        throw new Error("올바른 숫자를 입력해주세요.");
    }

    const koreanNumber = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
    const tenUnit = ["", "십", "백", "천"];
    const tenThousandUnit = ["조", "억", "만", ""];
    const unit = 10000;
    let result = "";

    let number = Math.abs(inputNumber);
    let unitIndex = tenThousandUnit.length - 1;

    while (number > 0) {
        const chunk = number % unit;
        const chunkArray = chunk.toString().split("");
        const length = chunkArray.length - 1;

        const chunkToKorean = chunkArray.reduce((acc, value, index) => {
            const digit = parseInt(value, 10);
            if (digit === 0) return acc;
            const koreanDigit =
                      index < length && digit === 1 ? "" : koreanNumber[digit];
            return acc + koreanDigit + tenUnit[length - index];
        }, "");

        if (chunkToKorean) {
            result = `${chunkToKorean}${tenThousandUnit[unitIndex]} ${result}`;
        }

        number = Math.floor(number / unit);
        unitIndex--;
    }

    return result.trim();
};
