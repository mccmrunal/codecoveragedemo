import { expect } from 'expect-webdriverio'
import { add, subtract } from '../src/calculator.js'

describe('Calculator Component', () => {
    it('should add numbers correctly', () => {
        expect(add(2, 3)).toBe(5)
    })

    it('should subtract numbers correctly', () => {
        expect(subtract(5, 2)).toBe(3)
    })
})
