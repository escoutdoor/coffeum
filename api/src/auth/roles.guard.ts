import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Role } from '@prisma/client'

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	match(roles: Role[], userRole: Role) {
		return roles.some(role => role === userRole) || userRole === Role.ADMIN
	}

	canActivate(context: ExecutionContext): boolean {
		const roles = this.reflector.get('roles', context.getHandler())

		if (!roles) {
			return true
		}

		const request = context.switchToHttp().getRequest()

		const user = request.user

		return this.match(roles, user.role)
	}
}
