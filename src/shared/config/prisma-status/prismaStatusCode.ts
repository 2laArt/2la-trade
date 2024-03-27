export enum PRISMA_STATUS_CODE {
  /**
	 * Unique constraint failed. Ошибка возникает, 
	  когда попытка вставить или обновить запись противоречит  	 существующему уникальному ограничению в базе данных.
 */

  CONSTRAINT = 'P2002',

  /**
   * record to update does not exist. Ошибка появляется, когда попытка обновить или удалить запись отсутствует в базе данных.
   */
  MISSING_FROM_DB = 'P2016',

  /**
   * not found. Ошибка напоминает, что запись, которую нужно извлечь или обработать, не найдена в базе данных.
   */
  NOT_FOUND = 'P3001',

  /**
   * An operation failed because it depends on one or more records that were required but not found. {cause}
   */
  INVALID_INPUT = 'P2025',

  /**
   * The value {field_value} stored in the database for the field {field_name} is invalid for the field's type
   */
  INVALID_FIELDS = 'P2005',
}
