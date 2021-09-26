export enum FilterType {
  Date = 'date',
  Rating = 'rating',
  Relevance = 'relevance',
  Title = 'title',
  VideoCount = 'videoCount',
  ViewCount = 'viewCount',
}

export const FilterList = {
  [FilterType.Date]: '시간순',
  [FilterType.Rating]: '평가순',
  [FilterType.Relevance]: '관련도순',
  [FilterType.ViewCount]: '조회수순',
  [FilterType.Title]: '제목순',
  [FilterType.VideoCount]: '업로드 동영상 갯수순',
};
