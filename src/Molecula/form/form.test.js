import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FormDate from "./form";

describe("Form component", () => {
  test("Snapshot form component", () => {
   const {asFragment} = render(<FormDate />)
   expect(asFragment()).toMatchSnapshot()
  });
  const setupName = () => {
    const utils = render(<FormDate />)
    const input = screen.getByLabelText('name-input')
    return {
      input,
      ...utils,
    }
  }
  test('input initialaicer', ()=>{
    const {input} = setupName()
    expect(input.value).toBe('')
  })
  test('updates form state on input change', ()=>{
    const {input} = setupName()
    fireEvent.change(input, {target: {value: 'lisandro'}})
    expect(input.value).toBe('lisandro')
  })
  const setupEmail = () => {
    const utils = render(<FormDate />)
    const input = screen.getByLabelText('email-input')
    return {
      input,
      ...utils,
    }
  }
  test('input email initialaicer', ()=>{
    const {input} = setupEmail()
    expect(input.value).toBe('')
  })
  test('updates form state on input email change', ()=>{
    const {input} = setupName()
    fireEvent.change(input, {target: {value: 'lisandro@hotmail.com'}})
    expect(input.value).toBe('lisandro@hotmail.com')
  })
});