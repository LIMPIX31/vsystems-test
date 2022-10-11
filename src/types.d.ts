declare type FontWeightNumeric = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950

declare type FontWeightSemantic =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'
  | 'extrablack'

declare type FontWeightLike = FontWeightSemantic | FontWeightNumeric

declare type ThreeLevel = 'low' | 'medium' | 'high'

declare namespace ExtraProps {
  declare interface HasChildren<T = any> {
    children?: T
  }

  declare interface Value<T> {
    value?: T
  }

  declare type ChangeAction<T, R = unknown> = (value: T) => R

  declare interface Changeable<T, R = unknown> {
    onChange?: ChangeAction<T, R>
  }

  declare type DataInput<T> = Value<T> & Changeable<T>

  declare interface Clickable {
    onClick?: () => void
  }

  declare interface Styled {
    style?: any
  }
}
