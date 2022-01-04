import renderer from 'react-test-renderer'
import TextInput from './TextInput'

test('TextInput displays label and text-input', () => {
  const title = 'Email'
  const placeholder = 'info@emoj.ie'
  const textInputRenderer = renderer.create(
    <TextInput title={title} placeholder={placeholder} />
  )
  const tree = textInputRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const textInputInstance = textInputRenderer.root
  expect(textInputInstance.findByType('span').children[0]).toEqual(title)
  expect(
    textInputInstance.findByProps({
      className: 'input input-primary input-bordered',
    }).props.placeholder
  ).toEqual(placeholder)
})
