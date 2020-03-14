import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';
import { DisplayMode } from '@microsoft/sp-core-library';
import { SPHttpClient } from '@microsoft/sp-http';  
import {IPhotoGallery} from '../model/IPhotoGallery'
import { IWebPartContext } from '@microsoft/sp-webpart-base';
export interface IPhotoGalleryProps {
  description: string;
  tagkeywords: IPickerTerms;
  siteurl:string;
  spHttpClient:SPHttpClient;
  displayMode:DisplayMode;
  webPartContext: IWebPartContext;
}
