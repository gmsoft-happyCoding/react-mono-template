/**
 * Gmsoft-components Cloud-Component 容器
 * @Author GM20171202
 * @Date 2019-10-30 10:49:46
 * @Last Modified by: GM20171202
 * @Last Modified time: 2019-10-30 15:35:54
 */
import React, { forwardRef } from 'react';
import CloundComponent from './CloudComponent';

export type GmsoftComponentNames =
  | 'AreaSelect'
  | 'EditableTagGroup'
  | 'SearchTree'
  | 'ProviderPicker'
  | 'YearPicker'
  | 'BigFileUpload'
  | 'BidOpeningProgress'
  | 'OrgPicker2';

interface ComponentConfig {
  componentName: GmsoftComponentNames;
}
interface AnyProps {
  [key: string]: any;
}

export type GmsoftComponentProps = ComponentConfig & AnyProps;

const GmsoftComponent = forwardRef<any, GmsoftComponentProps>(
  ({ componentName, ...restProps }, ref) => (
    <CloundComponent ref={ref} name={`gmsoft/${componentName}`} {...restProps} />
  )
);

export default GmsoftComponent;
