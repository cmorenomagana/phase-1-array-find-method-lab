function superbowlWin(record) {
    const found = record.find((element) => element.result === "W")
    if (found === undefined) {
        return undefined
    }
    return found.year
}