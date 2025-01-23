import { SelectedArticlesType } from '../models/TravelApp/selected-articles-type';
import { TravelApp } from '../static-data/travel-app';
import { DestinationsType } from '../models/TravelApp/destinations-type';
import { ImageSet1Type } from '../models/TravelApp/image-set1-type';
import { ImageSet2Type } from '../models/TravelApp/image-set2-type';
import { ArticlesSource1Type } from '../models/TravelApp/articles-source1-type';
import { ArticlesSource2Type } from '../models/TravelApp/articles-source2-type';
import { ArticlesSource3Type } from '../models/TravelApp/articles-source3-type';
import { ArticlesSource4Type } from '../models/TravelApp/articles-source4-type';

class TravelAppService {
	public getSelectedArticles(): SelectedArticlesType[] {
		return TravelApp['SelectedArticlesType'];
	}

	public getDestinations(): DestinationsType[] {
		return TravelApp['DestinationsType'];
	}

	public getImageSet1(): ImageSet1Type[] {
		return TravelApp['ImageSet1Type'];
	}

	public getImageSet2(): ImageSet2Type[] {
		return TravelApp['ImageSet2Type'];
	}

	public getArticlesSource1(): ArticlesSource1Type[] {
		return TravelApp['ArticlesSource1Type'];
	}

	public getArticlesSource2(): ArticlesSource2Type[] {
		return TravelApp['ArticlesSource2Type'];
	}

	public getArticlesSource3(): ArticlesSource3Type[] {
		return TravelApp['ArticlesSource3Type'];
	}

	public getArticlesSource4(): ArticlesSource4Type[] {
		return TravelApp['ArticlesSource4Type'];
	}
}
export const travelAppService: TravelAppService = new TravelAppService();
