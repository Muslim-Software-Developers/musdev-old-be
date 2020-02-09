<?php

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //create super admin role
        $role_super_admin = new Role();
        $role_super_admin->name = 'admin';
        $role_super_admin->description = 'admin user role';
        $role_super_admin->save();
                
        //create admin role
        $role_admin = new Role();
        $role_admin->name = 'moderator';
        $role_admin->description = 'moderator user role';
        $role_admin->save();

        //create user role
        $role_customer = new Role();
        $role_customer->name = 'member';
        $role_customer->description = 'member user role';
        $role_customer->save();
    }
}
