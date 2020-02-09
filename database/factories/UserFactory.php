<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Faker\Generator as Faker;
use Illuminate\Support\Str;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    static $password;
    $path = public_path().'\images\avatar\agent';

    return [
        'name' => $faker->name($gender = null),
        'email' => $faker->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'address' => $faker->streetAddress,
        'city' => $faker->city,
        'region' => $faker->state,
        'postal_code' => $faker->postcode,
        'country' => $faker->country,
        'mob_phone' => $faker->e164PhoneNumber,
        'avatar' => $faker->imageUrl(50, 50, 'people')
    ];
});
