import { test, describe, vi, expect, Mocked } from 'vitest'
import { testFn, request } from './utils'

// 导入axios
import axios from 'axios'
// 调用 vi.mock('axios')
vi.mock('axios')
// 使用ts，让其变换类型，需使用类型断言
const mockedAxios = axios as Mocked<typeof axios>

// callback test
// mock
describe('function', () => {
  test('create a mock function', () => {
    const callback = vi.fn()
    testFn(12, callback)
    // 是否被调用
    expect(callback).toHaveBeenCalled()
    // 调用的值
    expect(callback).toHaveBeenCalledWith(12)
  })
  test('spy on method', () => {
    const obj = {
      getName: () => 1
    }
    const spy = vi.spyOn(obj, 'getName')
    obj.getName()
    // 是否被调用
    expect(spy).toHaveBeenCalled()
    obj.getName()
    // 具体被调用几次
    expect(spy).toHaveBeenCalledTimes(2)
  })
  test('mock third party module', async () => {
    // mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 123 }))
    mockedAxios.get.mockResolvedValue({ data: 123 })
    const result = await request()
    expect(result).toBe(123)
  })
})
