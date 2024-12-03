import request from 'supertest'
import { calcucateDiscount } from './src/utils'
import app from './src/app'

describe('app', () => {
    it('shoud return correct discount amount', () => {
        const discount = calcucateDiscount(1000, 10)
        expect(discount).toBe(100)
    })

    it('should return 200 status code', async () => {
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(200)
    })
})
