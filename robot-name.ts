const USED_NAMES = new Set<string>()

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomLetter(): string {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[getRandomInt(0, 25)]
}

function generateRobotName(): string {
  return `${getRandomLetter()}${getRandomLetter()}${getRandomInt(0, 9)}${getRandomInt(0, 9)}${getRandomInt(0, 9)}`
}

function generateUniqueName(used: Set<string>): string {
  let suggestedName = generateRobotName()
  while (used.has(suggestedName)) {
    suggestedName = generateRobotName()
  }
  return suggestedName
}

export class Robot {
  public name!: string

  constructor() {
    this.resetName()
  }

  public resetName() {
    this.name = generateUniqueName(USED_NAMES)
    USED_NAMES.add(this.name)
  }

  public static releaseNames() {
    USED_NAMES.clear()
  }
}