<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
  public function __construct(protected UserService $userService)
  {
    //
  }

  public function index()
  {
    Inertia::share([
      'filters' => request()->all('search'),
    ]);
    return Inertia::render('Users/Index', [
      'users' => function () {
        $query = \App\Models\User::when(request('search'), function ($query, $search) {
          return $query->where('name', 'like', '%' . $search . '%')
            ->orWhere('email', 'like', '%' . $search . '%');
        })->with('roles')->latest();
        return UserResource::collection($query->paginate(10)->withQueryString());
      }
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(CreateUserRequest $request)
  {
    try {
      //code...
      $userDto = new \App\Dto\UserDto(
        name: $request->name,
        email: $request->email,
        password: $request->password,
      );

      $this->userService->store($userDto);
    } catch (\Throwable $th) {
      throw $th;
    }
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(User $user)
  {
    $user->load('roles');
    return UserResource::make($user);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateUserRequest $request, User $user)
  {
    try {
      $userDto = new \App\Dto\UserDto(
        name: $request->name,
        email: $request->email,
      );

      $user = $this->userService->update($userDto, $user);

      $user->syncRoles([$request->role]);
    } catch (\Throwable $th) {
      throw $th;
    }
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(User $user)
  {
    try {
      $user->delete();
    } catch (\Throwable $th) {
      Log::alert($th->getMessage(), [
        'data' => $user
      ]);
      abort(500);
    }
  }
}
