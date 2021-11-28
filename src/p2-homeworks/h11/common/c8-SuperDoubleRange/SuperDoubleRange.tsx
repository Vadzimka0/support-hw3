import React from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: number[]) => void
  value?: [number, number]
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange, value,
    // min, max, step, disable, ...
    ...restProps
  }
) => {
  // сделать самому, можно подключать библиотеки
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  const onChangeCallback = (arr: number[]) => {
    onChangeRange && onChangeRange(arr)
  }

  // const isDisabled = value && (value[0] >= value[1])
  const finalDoubleRangeClassName = `${s.doubleRange}`

  return <Range
    min={0}
    max={100}
    defaultValue={[value ? value[0] : 0, value ? value[1] : 100]}
    onAfterChange={onChangeCallback}
    className={finalDoubleRangeClassName}
    pushable={false}
  />
}

export default SuperDoubleRange
