<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // seed the user table with super admins
        factory(User::class, 1)->create()->each(function ($user){
            $user->roles()->attach(Role::where('name', 'admin')->first());
            $user->admin_id = 1;
            $user->save();
        });
        // seed the user table with admins
        factory(User::class, 9)->create()->each(function ($user){
            $user->roles()->attach(Role::where('name', 'moderator')->first());
            $user->admin_id = User::where('id', '<=', 3)->orderBy('id', 'desc')->get()->random()->id;
            $user->save();
        });
        // seed the user table with agents
        factory(User::class, 27)->create()->each(function ($user){
            $id = User::where('id', '<=', 10)->where('id', '>', 3)->orderBy('id', 'desc')->get()->random()->id;
            $user->roles()->attach(Role::where('name', 'agent')->first());
            $user->admin_id = $id;
            $user->save();
        });
    }
}
