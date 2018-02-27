
export interface ListConfig {
      list: Array<{
      name?: string,
      path?: string,
      clickHandler?: ( $event: any, listItem: any) => void;
    }>;
  }
