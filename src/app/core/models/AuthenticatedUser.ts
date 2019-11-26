export class AuthenticatedUser {
  public userId: number;
  public login: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(initializer?: AuthenticatedUser) {
    if (initializer) {
      this.userId = initializer.userId;
      this.login = initializer.login;
      this.firstName = initializer.firstName;
      this.lastName = initializer.lastName;
      this.email = initializer.email;
    }
  }
}
